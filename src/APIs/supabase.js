import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ukulneofgpkrklicnqfj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrdWxuZW9mZ3BrcmtsaWNucWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5OTA4MDksImV4cCI6MjAxMTU2NjgwOX0.l_CjWY537Pbglu03SayC8fX2F8pAbI0iXEVwqF0kKJg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;