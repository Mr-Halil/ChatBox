import React, { useEffect, useState } from "react";
import CourseBox from "../../components/CourseBox/CourseBox";
import "./mainPage.css";
import SearchBar from "../../components/searchBar/SearchBar";

function MainPage() {
  const [boxes, setBoxes] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Arama çubuğuna odaklanma durumu

  // Sayfa yüklendikten sonra animasyonları başlatma
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Sayfa yüklendiğinde animasyonları aktif et
    }, 1000); // 1 saniye gecikmeli başlat

    return () => clearTimeout(timeout);
  }, []);

  const createRandomBox = () => {
    const boxSize = 120; // Kutunun genişliği ve yüksekliği
    const fadeDuration = Math.random() * 2000 + 3000; // 1-3 saniye arası rastgele yok olma süresi

    const newBox = {
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * (window.innerWidth - boxSize), // Genişlik içinde rastgele konum
      y: Math.random() * (window.innerHeight - boxSize), // Yükseklik içinde rastgele konum
      courseName: "Course " + Math.floor(Math.random() * 100),
      fadeDuration, // Rastgele yok olma süresi
    };

    setBoxes((prevBoxes) => [...prevBoxes, newBox]);

    // Kutuyu kaldırma işlemi, animasyon süresi kadar beklenerek yapılır
    setTimeout(() => {
      setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== newBox.id));
    }, fadeDuration); // Animasyonun tamamlanmasını bekle
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 1000;
      setTimeout(createRandomBox, randomDelay);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleFocus = () => {
    setIsSearchFocused(true); // Arama çubuğuna odaklanıldığında
  };

  const handleBlur = () => {
    setIsSearchFocused(false); // Arama çubuğundan çıkıldığında
  };

  return (
    <div className={`main-page-background ${isSearchFocused ? "dimmed" : ""}`}>
      {boxes.map((box) => (
        <CourseBox
          key={box.id}
          x={box.x}
          y={box.y}
          courseName={box.courseName}
          fadeDuration={box.fadeDuration} // Yok olma süresi prop olarak geçiliyor
          className={isSearchFocused ? "dimmed" : ""} // Arama çubuğuna odaklanıldığında box'ları karart
        />
      ))}
      <SearchBar onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
}

export default MainPage;
