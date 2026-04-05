"use client";

const clients = [
  { name: "DEWA", logo: "/images/clients/dewa.png" },
  { name: "Etihad Water & Electricity", logo: "/images/clients/etihad-water-electricity.png" },
  { name: "SEWA", logo: "/images/clients/sewa.png" },
  { name: "ADDC", logo: "/images/clients/addc.png" },
  { name: "AADC", logo: "/images/clients/aadc.png" },
  { name: "NOMAC", logo: "/images/clients/nomac.png" },
  { name: "TRANSCO", logo: "/images/clients/transco.png" },
  { name: "GE", logo: "/images/clients/ge.png" },
  { name: "ADNOC", logo: "/images/clients/adnoc.png" },
  { name: "ABB", logo: "/images/clients/abb.png" },
  { name: "SIEMENS", logo: "/images/clients/siemens.png" },
  { name: "EMIRATES Elictrical Engineering", logo: "/images/clients/eee.png"}
];

const repeatedClients = [...clients, ...clients];

export default function ClientsSlider() {
  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Clients
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted by leading organizations
          </h2>
        </div>

        <div className="relative">
          <div className="clients-slider-track flex w-max gap-6">
            {repeatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-40 w-[220px] shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}