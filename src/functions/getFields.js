import supabase from "../config/supabase";

export async function getFields() {
    try {
        // Fetch all rows from the table
        let { data, error } = await supabase
            .from('profiles')
            .select('interests');

        if (error) {
            console.error('Error fetching fields from profiles:', error);
        } else {
            // Flatten the array of arrays into a single array
            let allSources = data.flatMap(profile => profile.interests);
        
            // Count occurrences of each source
            let sourceCounts = allSources.reduce((acc, source) => {
                if (!acc[source]) {
                    acc[source] = 1;
                } else {
                    acc[source]++;
                }
                return acc;
            }, {});
        
            // Convert the counts object into an array of objects
            let result = Object.entries(sourceCounts).map(([name, count]) => ({ name, count }));
            result.sort((a, b) => b.count - a.count);

            console.log('fields from profiles', result);
            return result;
        }

    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
    }
}

export const getInsightsForFields = async (selectedFields) => {

    try {
        // Fetch all rows from the table
        let { data, error } = await supabase
            .from('insights_new')
            .select('new_fields');
            
        if (error) {
            console.error('Error fetching insights:', error);
        } else {
            // Flatten the array of arrays into a single array
            let allInsights = data.flatMap(row => row.new_fields);
        
            // Count occurrences of each field
            let fieldCounts = allInsights.reduce((acc, field) => {
                if (selectedFields.includes(field)) {
                    if (!acc[field]) {
                        acc[field] = 1;
                    } else {
                        acc[field]++;
                    }
                }
                return acc;
            }, {});
        
            // Convert the counts object into an array of objects
            let result = Object.entries(fieldCounts).map(([name, count]) => ({ name, count }));
            result.sort((a, b) => b.count - a.count);

            console.log(result);
            return result;
        }

    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
    }
};

export const combineFields = async () => {
    try {
        const fieldsCount = await getFields();
        const selectedFields = fieldsCount.map(field => field.name);

        const insightCounts = await getInsightsForFields(selectedFields);

        const combinedCounts = fieldsCount.map(field => {
            const insights = insightCounts.find(insight => insight.name === field.name);
            return {
                name: field.name,
                people: field.count,
                insights: insights ? insights.count : 0
            };
        });

        combinedCounts.sort((a, b) => b.people - a.people);

        console.log(combinedCounts);
        return combinedCounts;
    } catch (error) {
        console.error('Error combining data:', error);
        return [];
    }
};