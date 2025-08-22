import { useNavigate } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

export default function App() {
  const DisplayCardBerita = ({ gambar, judul, deskripsi = "Nilai Awal" }) => {
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={gambar} alt="Berita 1" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{judul}</h2>
          <p className="line-clamp-3">{deskripsi}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Selengkapnya</button>
          </div>
        </div>
      </div>
    );
  };

  function Card({ title, value = 0 }) {
    return (
      <div className="statistik-siswa shadow-xl p-5">
        <h1 className="font-bold text-sm">{title}</h1>
        <h1 className="text-4xl font-bold">{value}</h1>
      </div>
    );
  }

  const DisplayCardGaleri = () => {
    return (
      <div className=" bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://i.ytimg.com/vi/G31setbrPNU/maxresdefault.jpg"
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </figure>
      </div>
    );
  };
  return (
    <MainLayouts
      title="Beranda"
      path={
        <>
          <h1 className="font-bold">HOME</h1>
          <h1 className="font-bold text-gray-300">/</h1>
          <h1 className="font-bold text-blue-500 hover:underline cursor-pointer">
            BERANDA
          </h1>
        </>
      }
    >
      {/* Berita */}
      <section className="container-berita p-5 mt-5">
        <div className="title-berita">
          <h1 className="text-3xl font-semibold text-center underline">
            Berita Dan Informasi Sekolah
          </h1>
        </div>
        <div className="content-card-berita justify-center flex mt-10 gap-5">
          <div className="card-berita-container grid grid-cols-3 gap-5 justify-center">
            <DisplayCardBerita
              gambar={
                "https://awsimages.detik.net.id/community/media/visual/2025/08/15/prabowo-salami-jokowi-1755246544663_169.jpeg?w=600&q=90"
              }
              judul={"Prabowo Sedang Berusaha Membangun Ekonomi Indonesia"}
              deskripsi="Joko Widodo, lebih dikenal sebagai Jokowi adalah politikus dan pengusaha Indonesia yang menjabat sebagai Presiden Indonesia ketujuh dari tahun 2014 sampai 2024. Sebelumnya ia adalah anggota Partai Demokrasi Indonesia Perjuangan."
            />
            <DisplayCardBerita
              gambar={"https://i.ytimg.com/vi/G31setbrPNU/maxresdefault.jpg"}
              judul={"Prabowo Sedang Berusaha Membangun Ekonomi Indonesia"}
              deskripsi="Joko Widodo, lebih dikenal sebagai Jokowi adalah politikus dan pengusaha Indonesia yang menjabat sebagai Presiden Indonesia ketujuh dari tahun 2014 sampai 2024. Sebelumnya ia adalah anggota Partai Demokrasi Indonesia Perjuangan."
            />
            <DisplayCardBerita
              gambar={
                "https://awsimages.detik.net.id/community/media/visual/2025/08/15/prabowo-salami-jokowi-1755246544663_169.jpeg?w=600&q=90"
              }
              judul={"Prabowo Sedang Berusaha Membangun Ekonomi Indonesia"}
              deskripsi="Joko Widodo, lebih dikenal sebagai Jokowi adalah politikus dan pengusaha Indonesia yang menjabat sebagai Presiden Indonesia ketujuh dari tahun 2014 sampai 2024. Sebelumnya ia adalah anggota Partai Demokrasi Indonesia Perjuangan."
            />
          </div>
        </div>
      </section>
      {/* Berita */}
      <section className="container-berita p-5 mt-5">
        <div className="title-berita">
          <h1 className="text-3xl font-semibold text-center underline">
            Galeri Sekolah / Galeri Acara
          </h1>
        </div>
        <div className="content-card-berita items-center flex-col flex mt-10 gap-5">
          <div className="card-berita-container grid grid-cols-3 gap-5 justify-center">
            <DisplayCardGaleri />
            <DisplayCardGaleri />
            <DisplayCardGaleri />
          </div>
          <div className="bottom mt-5">
            <button className="btn btn-primary">Selengkapnya</button>
          </div>
        </div>
      </section>
      {/* Statistik */}
      <section className="container-statistik mt-10">
        <div className="title-statistik">
          <h1 className="text-3xl font-semibold text-center underline">
            Data Statistik
          </h1>
        </div>
        <div className="content-statistik w-full  mt-5">
          <div className="card-statistik-container flex justify-center items-center grid grid-cols-4 gap-5 p-10">
            <Card title={"Jumlah Siswa"} value={"1500"} />
            <Card title={"Jumlah Guru"} value={"150"} />
            <Card title={"Jumlah Jurusan"} value={"5"} />
            <Card title={"Jumlah Romble"} value={"9"} />
          </div>
        </div>
      </section>
    </MainLayouts>
  );
}
