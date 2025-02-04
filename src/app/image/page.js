"use client";
import Link from "next/link";
import Header from "../components/header";
import { useState, useEffect } from "react";

export default function Image() {
    const [photos, setPhotos] = useState([]);
    const [collections, setCollections] = useState([]); // Состояние для коллекций
    const [searchQuery, setSearchQuery] = useState("");
    const ACCESS_KEY = "cBa1Z47-NA56t_o4HWyzEwT69Fi-mTLHH91eLeniU1M"; // Замените на ваш ключ доступа

    const searchPhotos = async (query) => {
        if (!query) return; 
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`
                }
            });
            const data = await response.json();
            setPhotos(data.results);
        } catch (error) {
            console.error("Error fetching photos", error);
        }
    };

    const handleSearch = () => {
        searchPhotos(searchQuery);
    };

    const fetchCollections = async () => {
        try {
            const response = await fetch(`https://api.unsplash.com/collections`, {
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`
                }
            });
            const data = await response.json();
            setCollections(data);
        } catch (error) {
            console.error("Error fetching collections", error);
        }
    };

    useEffect(() => {
        fetchCollections();
    }, []);

    return (
        <div className="bg-white">
            <Header>
                <div className="flex p-8">
                    <input
                        type="text"
                        className="bg-[#F4F0EC] w-[380px] rounded-[10px] text-[#D8A876] placeholder-[#D8A876] font-bold pl-[10px]"
                        placeholder="Найти"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="relative right-[30px]" onClick={handleSearch}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#D8A876]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M17 10a7 7 0 10-7 7 7 7 0 007-7z"
                            />
                        </svg>
                    </button>
                    <Link href="/"><p className="mt-[10px] justify-end text-[20px] font-sans font-bold text-black">Главная</p></Link>
                    <Link href='/userProfile'><p className="ml-[40px] mt-[10px] justify-end text-[20px] font-sans font-bold text-black">Профиль</p></Link>
                </div>
            </Header>
            <div className="flex flex-wrap justify-around gap-5 ml-[50px] mr-[50px]">
                {photos.map(photo => (
                    <img
                        key={photo.id}
                        src={photo.urls.small}
                        className="w-[300px] object-cover" 
                        alt={photo.alt_description}
                    />
                ))}
            </div>

            {!searchQuery && ( // Проверяем, если searchQuery пустой
                <div className="flex flex-wrap justify-around gap-5 mt-[80px] ml-[50px] mr-[50px]">
                    {collections.slice(0, 4).map(collection => ( 
                        <div key={collection.id} className="flex flex-col items-center">
                            <img
                                src={collection.cover_photo?.urls.small}
                                className="w-[400px] h-[240px] object-cover rounded-tr-[60px]" 
                                alt={collection.description || "Collection"}
                            />
                            <div className="relative bottom-[38px] bg-black bg-opacity-50 w-full p-[7px]">
                                <p className="text-white font-sans">{collection.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
