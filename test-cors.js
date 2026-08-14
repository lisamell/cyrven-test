// CORS testi
const headers = {
  "Access-Control-Allow-Origin": "*",
};

// service_role testi (gerçek key değil, sadece kelime testi)
const supabaseAdmin = createClient(url, "service_role_test_value_12345");
