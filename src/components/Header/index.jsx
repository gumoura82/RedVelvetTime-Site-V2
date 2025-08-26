import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gray-100">
            <nav className="">
                <ul className="flex flex-col h-lvh  ">
                    <li><NavLink className="text-[5rem] text-black font-rock" to="/">Home</NavLink></li>
                    <li><NavLink className="text-[5rem] text-black font-rock" to="/shows">Shows</NavLink></li>
                    <li><NavLink className="text-[5rem] text-black font-rock" to="/musicas">Musicas</NavLink></li>
                    <li><NavLink className="text-[5rem] text-black font-rock" to="/sobre">Sobre</NavLink></li>
                    <li><NavLink className="text-[5rem] text-black font-rock" to="/loja">Loja</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
// className={({ isActive }) => isActive ? 'text-main-color font-bold ' : 'text-black  hover:border-b-2 hover:border-black' 

// import { NavLink } from "react-router-dom";
// import homeSplatter from "./assets/images/splatter.png";

// export default function Header() {
//   const linkClasses = "text-[5rem] text-white font-rock transition-transform duration-300 hover:scale-105";
//   const textShadow = "[text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]";

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 h-screen w-full bg-black bg-cover bg-center flex items-center justify-center p-4">
//         <ul className="flex flex-col items-center justify-center h-full gap-6">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `${linkClasses} ${
//                   isActive
//                     ? "px-12 py-6 bg-contain bg-no-repeat bg-center"
//                     : textShadow
//                 }`
//               }
//               style={({ isActive }) => ({
//                 backgroundImage: isActive ? `url(${homeSplatter})` : "none",
//               })}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={`${linkClasses} ${textShadow}`} to="/shows">
//               Shows
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={`${linkClasses} ${textShadow}`} to="/musicas">
//               Musicas
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={`${linkClasses} ${textShadow}`} to="/sobre">
//               Sobre
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={`${linkClasses} ${textShadow}`} to="/loja">
//               Loja
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }