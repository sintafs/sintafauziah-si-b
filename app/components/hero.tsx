import foto from "../sinta.jpeg";

export default function Hero() {
    return(
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-300 font-bold"> CV ONLINE</h1>
          <h1 className="text-3xl"> Sinta Fauziah Sari </h1>
          <Profile />
          <p>
           Saya merupakan mahasiswa semester 5 yang sedang menempuh pendidikan di universitas ma'soem,
           kini saya melanjutkan kuliah dengan mengambil program S1 sistem informasi
            </p>
            </div>
        );
    }


    function Profile () {
        return <img src={foto.src} alt="Sinta Fauziah Sari" className="fotoku" />;
    }