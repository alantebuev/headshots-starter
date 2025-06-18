
const requiredEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY'
];

console.log('🔍 Validating environment variables...\n');

let allValid = true;

requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar];
  if (value) {
    console.log(`✅ ${envVar}: ${envVar.includes('KEY') ? '[HIDDEN]' : value}`);
  } else {
    console.log(`❌ ${envVar}: MISSING`);
    allValid = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allValid) {
  console.log('🎉 All required environment variables are set!');
} else {
  console.log('⚠️  Some environment variables are missing. Please check your .env.local file.');
  process.exit(1);
}
