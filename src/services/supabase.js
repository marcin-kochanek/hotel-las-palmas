import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pagunufkydbnsctflfbh.supabase.co';
// This key is safe to use in a browser because of enabled Row Level Security for your tables and configured policies.
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZ3VudWZreWRibnNjdGZsZmJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzEzNTYsImV4cCI6MjAwOTE0NzM1Nn0.aX865I2JgJ50ulYA0gqvrKnIgUBtBpdxrbz6HQBBGVs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
