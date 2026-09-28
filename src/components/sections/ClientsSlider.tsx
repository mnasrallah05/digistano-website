import Image from "next/image";
import { SectionHead } from "@/components/site/Elements";

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
  { name: "EMIRATES Electrical Engineering", logo: "/images/clients/eee.png" },
  { name: "Alkhorayef", logo: "/images/clients/alkhorayef.png" },
  { name: "Aramco", logo: "/images/clients/aramco.png" },
  { name: "Emirates Global Aluminium", logo: "/images/clients/ega.png" },
  { name: "GCC Lab", logo: "/images/clients/gcc-lab.png" },
  { name: "Innomotics", logo: "/images/clients/innomotics.jpg" },
  { name: "Kahramaa", logo: "/images/clients/kahramaa.png" },
  { name: "NMDC Group", logo: "/images/clients/nmdc-group.webp" },
  { name: "Rightway", logo: "/images/clients/rightway.jpg" },
  { name: "RTA", logo: "/images/clients/rta.png" },
  { name: "SABIC", logo: "/images/clients/sabic.png" },
  { name: "Saudi Electricity Company", logo: "/images/clients/saudi-electricity-company.png" },
];

const track = [...clients, ...clients];

export default function ClientsSlider() {
  return (
    <section className="ds-section ds-section-tint">
      <div className="ds-container">
        <SectionHead label="Our clients" title="Trusted by leading utilities and industrial operators." />
        <div className="ds-logo-strip">
          <div className="ds-logo-strip-track">
            {track.map((client, index) => (
              <div className="ds-logo-strip-item" key={`${client.name}-${index}`}>
                <Image src={client.logo} alt={client.name} width={200} height={84} style={{ width: "auto", height: "auto" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
