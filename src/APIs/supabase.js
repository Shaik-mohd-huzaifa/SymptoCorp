import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gubymwuuroyagpdpgdif.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Ynltd3V1cm95YWdwZHBnZGlmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDI2MTkyNSwiZXhwIjoyMDA5ODM3OTI1fQ.qCGoYbeB8kXYtGdpqi26eVPYDyQUEvPaco6GGYD4Lq0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;