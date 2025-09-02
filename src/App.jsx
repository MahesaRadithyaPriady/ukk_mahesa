import { useNavigate } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

export default function App() {
  const DisplayCardBerita = ({ gambar, judul, deskripsi = "Nilai Awal" }) => {
    return (
      <div className="card bg-base-100 w-full shadow-md hover:shadow-lg transition p-3">
        <div className="flex gap-3">
          <img
            src={gambar}
            alt={judul}
            className="w-28 h-20 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm line-clamp-2">{judul}</h2>
            <p className="text-xs text-gray-500 line-clamp-2">{deskripsi}</p>
            <button className="btn btn-xs btn-primary mt-2 self-start">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    );
  };

  function Card({ title, value = 0 }) {
    return (
      <div className="statistik-siswa bg-white shadow-md p-5 rounded-xl text-center hover:shadow-lg transition">
        <h1 className="font-medium text-gray-600 text-sm">{title}</h1>
        <h1 className="text-3xl font-bold text-blue-600">{value}</h1>
      </div>
    );
  }

  const DisplayCardGaleri = ({ gambar, judul = "Foto Kegiatan" }) => {
    return (
      <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
        <img
          src={gambar}
          alt={judul}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <h2 className="text-white font-semibold text-lg">{judul}</h2>
        </div>
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
      {/* Sambutan Kepala Sekolah */}
      <section className="container-sambutan p-5 mt-6">
        <div className="bg-white rounded-xl shadow-md p-5 md:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img
              src="https://smkn4tasikmalaya.vercel.app/_nuxt/Kurniawan.B-1z8vsu.png"
              alt="Kepala Sekolah"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full ring-4 ring-blue-100"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-2">Sambutan Kepala Sekolah</h2>
            <p className="text-gray-600 leading-relaxed">
              Assalamu'alaikum warahmatullahi wabarakatuh. Selamat datang di website resmi
              sekolah kami. Kami berkomitmen untuk menghadirkan layanan pendidikan terbaik,
              membentuk karakter, dan mengembangkan potensi peserta didik melalui berbagai
              program akademik maupun non-akademik. Semoga informasi di laman ini bermanfaat
              bagi seluruh warga sekolah dan masyarakat.
            </p>
            <p className="mt-3 font-medium">Kurniawan S.Pd, M.Pd</p>
          </div>
        </div>
      </section>

      {/* Statistik Atas */}
      <section className="container-statistik mt-5">
        <h1 className="text-2xl font-semibold text-center underline">
          Data Statistik
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5 mt-5">
          <Card title={"Jumlah Siswa"} value={"1500"} />
          <Card title={"Jumlah Guru"} value={"150"} />
          <Card title={"Jumlah Jurusan"} value={"5"} />
          <Card title={"Jumlah Romble"} value={"9"} />
        </div>
      </section>

      {/* Berita & Galeri */}
      <section className="container-berita p-5 mt-5 grid md:grid-cols-3 gap-8">
        {/* Berita */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold underline mb-5">
            Berita Dan Informasi Sekolah
          </h1>
          <div className="flex flex-col gap-4">
            <DisplayCardBerita
              gambar="https://awsimages.detik.net.id/community/media/visual/2025/08/15/prabowo-salami-jokowi-1755246544663_169.jpeg?w=600&q=90"
              judul="Prabowo Sedang Berusaha Membangun Ekonomi Indonesia"
              deskripsi="Joko Widodo, lebih dikenal sebagai Jokowi adalah politikus dan pengusaha Indonesia..."
            />
            <DisplayCardBerita
              gambar="https://i.ytimg.com/vi/G31setbrPNU/maxresdefault.jpg"
              judul="Prabowo Sedang Berusaha Membangun Ekonomi Indonesia"
              deskripsi="Joko Widodo, lebih dikenal sebagai Jokowi adalah politikus dan pengusaha Indonesia..."
            />
            <DisplayCardBerita
              gambar="https://awsimages.detik.net.id/community/media/visual/2025/08/15/prabowo-salami-jokowi-1755246544663_169.jpeg?w=600&q=90"
              judul="Prabowo Sedang Berusaha Membangun Ekonomi Indonesia"
              deskripsi="Joko Widodo, lebih dikenal sebagai Jokowi adalah politikus dan pengusaha Indonesia..."
            />
          </div>
        </div>

        {/* Galeri */}
        <div>
          <h1 className="text-2xl font-semibold underline mb-5">
            Galeri Sekolah
          </h1>
          <div className="grid grid-cols-1 gap-5">
            <DisplayCardGaleri
              gambar={
                "https://awsimages.detik.net.id/visual/2025/08/25/penampakan-terkini-demo-depan-dpr-ri-jalan-gatot-subroto-ditutup-1756102479685_169.jpeg?w=650"
              }
              judul="Demo DPR"
            />
            <DisplayCardGaleri
              gambar={
                "https://awsimages.detik.net.id/visual/2025/08/25/penampakan-terkini-demo-depan-dpr-ri-jalan-gatot-subroto-ditutup-1756102479685_169.jpeg?w=650"
              }
              judul="Demo DPR"
            />
            <DisplayCardGaleri
              gambar={
                "https://awsimages.detik.net.id/visual/2025/08/25/penampakan-terkini-demo-depan-dpr-ri-jalan-gatot-subroto-ditutup-1756102479685_169.jpeg?w=650"
              }
              judul="Demo DPR"
            />
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary">Selengkapnya</button>
          </div>
        </div>
      </section>
    </MainLayouts>
  );
}
