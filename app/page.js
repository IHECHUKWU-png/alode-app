export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px 20px", textAlign: "center", background: "#FFF7ED", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "48px", color: "#EA580C" }}>ALODE</h1>
      <p style={{ fontSize: "20px", color: "#444" }}>Find the best food in Aba. Fast. Fresh. Delivered.</p>

      <div style={{ marginTop: "30px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#" style={{ background: "#EA580C", color: "white", padding: "14px 24px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold" }}>Order Food Now</a>
        <a href="#" style={{ background: "white", color: "#EA580C", padding: "14px 24px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold", border: "2px solid #EA580C" }}>Become a Vendor</a>
      </div>

      <div style={{ marginTop: "40px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", width: "200px" }}>
          <h3>🍲 Local Dishes</h3>
          <p>Ofada, Banga, Oha & more</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", width: "200px" }}>
          <h3>🛵 Fast Delivery</h3>
          <p>30-45 mins in Aba</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "12px", width: "200px" }}>
          <h3>💳 Pay on Delivery</h3>
          <p>Cash or Transfer</p>
        </div>
      </div>

      <p style={{ marginTop: "40px", color: "#888" }}>ALODE - Aba Food Delivery</p>
    </main>
  );
}