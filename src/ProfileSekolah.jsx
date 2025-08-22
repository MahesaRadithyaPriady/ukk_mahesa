import { BookOpen } from "lucide-react";

import MainLayouts from "./layouts/MainLayouts";
export default function ProfileSekolah() {
  const DisplayCardMisi = ({ misi }) => {
    return (
      <div className="misi-item flex gap-8">
        <div className="image-misi bg-blue-700 rounded-2xl border border-gray-400 hover:border-gray-500 cursor-pointer hover:scale-110 transition-all min-w-28 h-28 flex justify-center items-center shadow-lg">
          <BookOpen color="white" size={60} />
        </div>
        <div className="content-misi h-24 flex justify-center items-center">
          <p className="title font-bold text-white text-xl w-full">{misi}</p>
        </div>
      </div>
    );
  };
  return (
    <MainLayouts
      title="Profile Sekolah"
      path={
        <>
          <h1 className="font-bold">HOME</h1>
          <h1 className="font-bold text-gray-300">/</h1>
          <h1 className="font-bold text-blue-500 hover:underline cursor-pointer">
            PROFILE SEKOLAH
          </h1>
        </>
      }
    >
      <div className="visi-container text-center w-full">
        <h1 className="mt-25 font-bold text-5xl">VISI</h1>
        <p className="mt-10 font-bold text-3xl">
          <q>
            TERWUJUDNYA LULUSAN YANG CERDAS, AKTIF, <br /> KOMPETITIF, ADAPTIF,
            DAN PRODUKTIF BERLANDASKAN IMAN DAN TAKWA
          </q>
        </p>
      </div>

      <div className="bg-blue-700 min-h-screen w-full p-10 mt-24">
        <div className="flex gap-10">
          <div className="misi-container ml-25">
            <div className="misi-title">
              <h1 className="font-bold text-4xl text-white">MISI</h1>
            </div>
            <div className="misi-list flex flex-col mt-8 gap-5">
              <DisplayCardMisi
                misi={
                  <>
                    Menyiapkan Sumber Daya Manusia yang cerdas dan kompeten bai
                    <br />
                    hardskill maupun softskill.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Meningkatkan dan mengembangkan aktifitas serta kreatifitas
                    seluruh warga sekolah <br /> dalam berbagai kegiatan
                    positif.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Mewujudkan manajemen pengelolaan <br /> yang efektif,
                    efesien, transparan, akuntabel dan layanan prima.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Menumbuhkan dan mengembangkan potensi dan <br /> kemampuan
                    Sumber Daya Manusia yang berdaya saing tinggi melalui
                    berbagai kegiatan akademik maupun non akademik.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Menyelenggarakan berbagai program kegiatan <br /> dalam
                    upaya meningkatkan Sumber Daya Manusia yang mampu
                    menyesuaikan dengan perkembangan.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Mengembangkan sarana prasarana dan lingkungan sekolah yang
                    menyenangkan sebagai wadah menumbuhkembangkan daya kreasi
                    dan inovasi untuk menghasilkan produk teknologi tepat guna.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Membangun jiwa wirausaha yang handal melalui pembelajaran
                    Teaching Factory (TEFA) dan Kelas Industri.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Menjalin dan mengembangkan kemitraan dengan Industri dan
                    Dunia Kerja (IDUKA) serta lembaga lainnya yang relevan.
                  </>
                }
              />
              <DisplayCardMisi
                misi={
                  <>
                    Menanamkan dan membudayakan sikap dan perilaku yang baik
                    pada aktivitas di sekolah maupun dalam kehidupan
                    sehari-hari.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sejarah-container mb-20 text-center  w-full">
        <h1 className="mt-25 font-bold text-5xl">SEJARAH</h1>
        <p className="mt-10 font-bold text-xl  p-5">
          Sejalan dengan Program Pemerintah dibidang pendidikan Menengah
          Kejuruan pada saat itu yakni pemerataan akses ditambah pula dengan
          banyaknya keinginan masyarakat yang mengharapkan adanya SMK Negeri di
          daerah Kecamatan Purbaratu Kota Tasikmalaya, terutama untuk menampung
          tamatan dari SLTP yang ingin melanjutkan ke SMK maka beberapa tokoh
          masyarakat, unsur pejabat pemerintah di Kecamatan Purbaratu Kota
          Tasikmalaya mengusulkan kepada pemerintah Kota Tasikmalaya dan
          Pemerintah Provinsi Jawa Barat, agar berdirinya SMK Negeri di
          Kecamatan Purbaratu Kota Tasikmalaya.
        </p>
      </div>
    </MainLayouts>
  );
}
