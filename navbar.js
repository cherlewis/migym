// Guardamos todo el diseño de la barra en una variable
const menuInferior = `
    <div class="pb-24"></div>
    <div class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 flex justify-around items-center pt-3 pb-6 shadow-[0_-5px_15px_rgba(0,0,0,0.03)] z-50">
        
        <a href="index.html" class="flex flex-col items-center text-gray-400 hover:text-blue-600 transition duration-200">
            <div class="text-2xl mb-1">🏠</div>
            <span class="text-[11px] font-medium">Inicio</span>
        </a>

        <a href="admin.html" class="flex flex-col items-center text-gray-400 hover:text-blue-600 transition duration-200">
            <div class="text-2xl mb-1">⚙️</div>
            <span class="text-[11px] font-medium">Admin</span>
        </a>

        <a href="perfil.html" class="flex flex-col items-center text-gray-400 hover:text-blue-600 transition duration-200">
            <div class="text-2xl mb-1">👤</div>
            <span class="text-[11px] font-medium">Perfil</span>
        </a>

    </div>
`;
document.body.insertAdjacentHTML('beforeend', menuInferior);
