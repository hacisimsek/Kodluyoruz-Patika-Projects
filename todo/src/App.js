import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true },
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  const addNew = (title) => {
    setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]);
    setYeniBaslik("");
  };

  const markComplete = (id) => {
    setListe(
      liste.map((el) =>
        el.id === id ? { ...el, tamamlandi: !el.tamamlandi } : el
      )
    );
  };

  const clearComplete = () => {
    setListe(liste.filter((item) => !item.tamamlandi));
  };

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}
          placeholer="listeye ekle"
        />
        <button
          onClick={() => {
            addNew(yeniBaslik);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {liste.map((item) => (
          <div
            //unit key için  (item ,index) de yapabilirsin ve sadece key={index} de diyebilirdin.
            key={item.id}
            onClick={() => markComplete(item.id)}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => clearComplete()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
}
