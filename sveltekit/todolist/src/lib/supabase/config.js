import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wahajcuuqpsdtsvekxrz.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaGFqY3V1cXBzZHRzdmVreHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1Mzc2MTMsImV4cCI6MTk5OTExMzYxM30.5sdSant-PVYSaivT7fXnh0XPyz8-ui5px_PARJCXQKs"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

// поменяй url и key на свой и создай таблицу , где то я код от нее уже ебнул, но мне лень искать, найдешь сам(а).