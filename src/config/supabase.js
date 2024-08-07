import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bdbvbfiwwlwhqpwfzviz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkYnZiZml3d2x3aHFwd2Z6dml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1OTUyNTMsImV4cCI6MjAzMjE3MTI1M30.UWd0zPRWb9vb0NxCx5GcV6VRMNSaTEqifaGq3VcZXKo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
