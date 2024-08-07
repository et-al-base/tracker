import supabase from "../config/supabase";

export async function getSources() {
    try {
        // Fetch all rows from the table
        let { data, error } = await supabase
            .from('profiles')
            .select('sources');

        if (error) {
            console.error('Error fetching sources:', error);
        } else {
            // Flatten the array of arrays into a single array
            let allSources = data.flatMap(profile => profile.sources);
        
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

            console.log(result);
            return result;
        }

    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
    }
}

export const getInsightsForSources = async (selectedSources) => {

    try {
        // Fetch all rows from the table
        let { data, error } = await supabase
            .from('insights_new')
            .select('filters');
            
        if (error) {
            console.error('Error fetching insights:', error);
        } else {
            // Flatten the array of arrays into a single array
            let allInsights = data.flatMap(row => row.filters);
        
            // Count occurrences of each source
            let sourceCounts = allInsights.reduce((acc, source) => {
                if (selectedSources.includes(source)) {
                    if (!acc[source]) {
                        acc[source] = 1;
                    } else {
                        acc[source]++;
                    }
                }
                return acc;
            }, {});
        
            // Convert the counts object into an array of objects
            let result = Object.entries(sourceCounts).map(([name, count]) => ({ name, count }));
            result.sort((a, b) => b.count - a.count);

            console.log(result);
            return result;
        }

    } catch (error) {
        console.error('Error fetching data from Supabase:', error);
    }
};

export const combineData = async () => {
    try {
        const sourceCounts = await getSources();
        const selectedSources = sourceCounts.map(source => source.name);

        const insightCounts = await getInsightsForSources(selectedSources);

        const combinedCounts = sourceCounts.map(source => {
            const insights = insightCounts.find(insight => insight.name === source.name);
            return {
                name: source.name,
                people: source.count,
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
