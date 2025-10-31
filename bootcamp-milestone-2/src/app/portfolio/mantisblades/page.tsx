// app/mantisblades/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function MantisBlades() {
  return (
    <main className="page-wrap">
      <h1 className="page-title">Mantis Blades</h1>

      <div className="project-img" style={{ display: "grid", gap: 12 }}>
        <Image
          src="/images/mantisblades.jpeg"
          alt="Mantis Blades"
          width={1200}
          height={800}
        />
        <Image
          src="/images/mantisblades2.png"
          alt="Mantis Blades second angle"
          width={1200}
          height={800}
        />
      </div>

      <div className="Mantis-Blades">
        {/* Supplies */}
        <section className="Steps">
          <h2 className="step-entry">Supplies</h2>
          <ul className="step-entry-info">
            <li>PLA/PETG filament</li>
            <li>3D Printer</li>
            <li>
              2x{" "}
              <a
                href="https://www.amazon.com/4-Pack-MG996R-Torque-Digital-Helicopter/dp/B07MFK266B"
                target="_blank"
              >
                MG996R Servos
              </a>
            </li>
            <li>
              <a href="https://a.co/d/gKbsaUd" target="_blank">
                Arduino Nano
              </a>
            </li>
            <li>
              <a href="https://a.co/d/2vGjyZ1" target="_blank">
                MPU-6050 IMU
              </a>
            </li>
            <li>
              <a href="https://a.co/d/2vGjyZ1" target="_blank">
                6V 2400mAh Battery Pack
              </a>
            </li>
            <li>
              <a href="https://a.co/d/0acszwi" target="_blank">
                5V 2400mAh USB Battery
              </a>
            </li>
            <li>Miscellaneous cables (for recharging)</li>
            <li>Foam sheets (optional; padding)</li>
            <li>Solid core wire</li>
            <li>Soldering station</li>
            <li>Breadboard</li>
            <li>Velcro</li>
            <li>3D Printer access</li>
          </ul>
        </section>

        {/* Step 1 */}
        <section className="Steps">
          <h2 className="step-entry">Step 1</h2>
          <div className="project-img" style={{ display: "grid", gap: 12 }}>
            <Image src="/images/step1.png" alt="Step 1: Print parts" width={1200} height={800} />
            <Image src="/images/step1b.png" alt="Step 1b: Print parts" width={1200} height={800} />
          </div>
          <h3>Print the Parts</h3>
          <p className="step-entry-info">
            <a href="/downloads/3DMantisParts.zip">Download the STL files</a> and 3D print them.
            Use PLA or PETG. A ~256×256×256 mm printer volume is recommended.
          </p>
        </section>

        {/* Step 2 */}
        <section className="Steps">
          <h2 className="step-entry">Step 2</h2>
          <div className="project-img">
            <Image src="/images/step2.png" alt="Step 2: Components" width={1200} height={800} />
          </div>
          <h3>Assembly Instructions</h3>
          <p className="step-entry-info">
            Assemble the 3D-printed parts with the provided screw holes. Mount two servos in their
            brackets, then wire them to the breadboard per the circuit. Add Velcro straps and foam
            padding where the device contacts skin.
          </p>
        </section>

        {/* Step 3 */}
        <section className="Steps">
          <h2 className="step-entry">Step 3</h2>
          <div className="project-img">
            <Image src="/images/step3.png" alt="Step 3: Program the Arduino" width={1200} height={800} />
          </div>
          <h3>Program the Arm</h3>
          <p className="step-entry-info">
            Install Arduino IDE and the Adafruit MPU6050 library, then upload the code to an Arduino
            Nano.{" "}
            <a href="/downloads/BladeCode.zip">Download main code</a>.
          </p>
        </section>

        {/* Step 4 */}
        <section className="Steps">
          <h2 className="step-entry">Step 4</h2>
          <div className="project-img">
            <Image src="/images/step4.png" alt="Step 4: Wire and solder" width={1200} height={800} />
          </div>
          <h3>Electronics and Soldering</h3>
          <p className="step-entry-info">
            Power the breadboard with a charged battery, mount the IMU, verify servo connections, and
            secure components in their holders to avoid disconnects during use.
          </p>
        </section>

        {/* Step 5 */}
        <section className="Steps">
          <h2 className="step-entry">Step 5</h2>
          <div className="project-img">
            <Image src="/images/step5.png" alt="Step 5: Wear and use" width={1200} height={800} />
          </div>
          <h3>Wear and Use</h3>
          <p className="step-entry-info">
            Fit the arm brace snugly, ensure a clear area, then power on the electronics. Use with
            care and never in a way that could injure someone.
          </p>
        </section>

        <section className="Steps">
          <h2>Did you like this project? <br /> Stay tuned for more!</h2>
        </section>

        {/* Optional link back to portfolio */}
        <p style={{ marginTop: 24 }}>
          <Link href="/portfolio">← Back to Portfolio</Link>
        </p>
      </div>
    </main>
  );
}
