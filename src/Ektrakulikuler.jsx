import { useParams } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

export default function Ekstrakulikuler() {
  const { id } = useParams();
  const data = {
    paskibra: {
      id: "paskibra",
      foto:
        "https://i.pinimg.com/originals/91/8f/9c/918f9cd515af2164483e1bd47c361da2.jpg",
      deskripsi:
        "Paskibra adalah ekstrakurikuler yang membina kedisiplinan, kepemimpinan, dan kerja sama melalui kegiatan baris-berbaris serta upacara bendera.",
      pembina: "Bpk. Arip",
      fullID: "Pasukan Pengibar Bendera",
    },
    pmr: {
      id: "pmr",
      foto:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQCgUJ3ReF52e-3icUYmDglSYFEyqHqnwAEECc2yzX-uKMc7ptmBLyG-X4DdNlNV3PUch0kOHpoCRlZnk1tlx8SWuzigiSWAeUkQzuUpfsPYeJPHPVzoHQBQrd664W2teeOvGeB1ydwkchgeNsAhad5RK4Hv5SlFrKqArLd-w5zOhB7oIJ32gXzlsB/s320/GKL48_PMR%20Wira%20-%20koleksilogo.com.jpg",
      deskripsi:
        "PMR (Palang Merah Remaja) berfokus pada keterampilan pertolongan pertama, kesehatan remaja, dan kegiatan sosial kemanusiaan.",
      pembina: "Bpk. Herry",
      fullID: "Palang Merah Remaja",
    },
    pks: {
      id: "pks",
      foto:
        "https://upload.wikimedia.org/wikipedia/id/7/74/Pks.jpg",
      deskripsi:
        "PKS (Patroli Keamanan Sekolah) menanamkan kedisiplinan dan tanggung jawab dalam menjaga ketertiban lingkungan sekolah.",
      pembina: "Bpk. Bintang",
      fullID: "Patroli Keamanan Sekolah",
    },
    pramuka: {
      id: "pramuka",
      foto:
        "https://awsimages.detik.net.id/community/media/visual/2019/09/18/ecf5951a-8716-4a41-a8fd-8785f156b596.png?w=1200",
      deskripsi:
        "Pramuka melatih kemandirian, kepemimpinan, dan keterampilan lapangan melalui kegiatan kepramukaan yang seru dan mendidik.",
      pembina: "Bpk. Asep",
      fullID: "Pramuka",
    },
    pd: {
      id: "pd",
      foto:
        "https://smpn10tasikmalaya.sch.id/wp-content/uploads/2025/01/LambangPD.png",
      deskripsi:
        "PD (Perisai Diri) adalah ekstrakurikuler bela diri pencak silat yang berfokus pada pembinaan fisik, mental, serta keterampilan teknik beladiri berbasis budaya Indonesia.",
      pembina: "Bu. Lisna",
      fullID: "Perisai Diri",
    },
  };
  const item = data[id];
  return (
    <MainLayouts
      title={"Ekstrakulikuler"}
      path={
        <>
          <h1 className="font-bold">HOME</h1>
          <h1 className="font-bold text-gray-300">/</h1>
          <h1 className="font-bold text-blue-500 hover:underline cursor-pointer">
            {item ? item.fullID.toUpperCase() : "TIDAK DITEMUKAN"}
          </h1>
        </>
      }
    >
      <div className="p-5">
        {item ? (
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden grid md:grid-cols-2">
            <div className="relative aspect-square bg-gray-100">
              <img
                src={item.foto}
                alt={item.fullID}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h1 className="text-3xl font-bold">{item.fullID}</h1>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.deskripsi}</p>
              <div className="mt-5">
                <span className="text-sm text-gray-500">Pembina</span>
                <p className="font-semibold">{item.pembina}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning max-w-5xl mx-auto">
            <span>Data ekstrakurikuler tidak ditemukan.</span>
          </div>
        )}
      </div>
    </MainLayouts>
  );
}
