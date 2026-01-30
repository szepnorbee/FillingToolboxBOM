window.APP_CONFIG = {
    // A Google Script Web App URL-je (Backend)
    API_URL: "https://script.google.com/macros/s/AKfycbw5JO6bvRVl6YaznLgIaw8URIL8okq-cH-1yj1ZuMdFzUXQ9e5TmGmRguJnechzk6GT8Q/exec",
    
    // A Google Sheet címe (Szerkesztéshez)
    SHEET_URL: "https://docs.google.com/spreadsheets/d/1U6sbZG9ThOOW4blMD_HDU5SsiA6M2pNk7PY7rrSVVsU/edit?gid=1996609599#gid=1996609599",

    // Gépek listája
    MACHINES: [
        { id: 'M1', name: 'Machine 1 (Main)' },
        { id: 'M2', name: 'Machine 2' }
    ],

    // Formátumok (Szettek) listája színekkel (Tailwind CSS osztályok)
    FORMATS: [
        { id: 'F1', name: 'Format Set 1', color: 'bg-pink-500 text-pink-100 border-pink-400' },
        { id: 'F2', name: 'Format Set 2', color: 'bg-purple-500 text-purple-100 border-purple-400' },
        { id: 'F3', name: 'Format Set 3', color: 'bg-indigo-500 text-indigo-100 border-indigo-400' },
        { id: 'F4', name: 'Format Set 4', color: 'bg-cyan-500 text-cyan-100 border-cyan-400' },
        { id: 'F5', name: 'Format Set 5', color: 'bg-teal-500 text-teal-100 border-teal-400' },
        { id: 'F6', name: 'Format Set 6', color: 'bg-orange-500 text-orange-100 border-orange-400' }
    ]
};
