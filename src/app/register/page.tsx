import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Image
            src="/vacina_certa.png"
            width={160}
            height={120}
            alt="vacina_certa_logo"
          />
          <h1 className={styles.title}>Primeiro Acesso</h1>
        </div>
        <div style={{ width: "100%" }}>
          <div className={styles.input_container}>
            <input
              type="text"
              className={styles.input}
              placeholder="CPF"
              autoFocus
            />
            <input type="text" className={styles.input} placeholder="Nome" />
            <input
              type="text"
              className={styles.input}
              placeholder="Data de nascimento"
            />
            <input type="text" className={styles.input} placeholder="Email" />
            <input type="text" className={styles.input} placeholder="Senha" />
          </div>

          <div style={{ display: "flex", margin: "2rem 0" }}>
            <button className={styles.deafult_button}>
              <Link href="/login" replace>
                Cadastrar
              </Link>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default Register;
