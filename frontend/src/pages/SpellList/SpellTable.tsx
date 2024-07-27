import { spellsTableElem } from "@/constants";
import { SpellMainStats } from "@/interfaces/spell";
import { ITableElem } from "@/types";
// import { useState } from "react";

interface ListProps {
    spells: SpellMainStats[];
    onRowClick: (id: string) => void;
}

const SpellTable: React.FC<ListProps> = ({ spells, onRowClick }) => {
    // const [asc, setAsc] = useState(true);

    const sortTable = async () => {
        console.log("Sorting table")
    };

    const getSpellProperties = (spell: SpellMainStats) => [
        spell.level,
        spell.name,
        spell.concentration ? "✔" : "✖",
        spell.duration,
        spell.time,
        spell.ranges
    ];

    return (
        <table
            className="font-[DraconicFont] top-24 w-full border-collapse outline-shadow grow-0 flex-shrink-0"
        >
            <thead>
                <tr>
                    {spellsTableElem.map((link: ITableElem) => (
                        <th
                            key={link.id}
                            onClick={() => {
                                sortTable();
                            }}
                            className="bg-zinc-950 sticky top-0 text-white h-10 p-2 text-xl cursor-pointer
                            [&:nth-child(3)]:pr-12"
                        >
                            {link.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="snap-mandatory snap-y bg-spell-table w-full">
                {spells.map((spell: SpellMainStats, index) => (
                    <tr
                        key={spell.spell_url}
                        tabIndex={index}
                        onClick={() => onRowClick(spell.spell_url)}
                        className="snap-start pt-3 cursor-pointer p-1
                        text-gray-300 hover:[transition:0.3s] hover:bg-violet-400/25
                        hover:text-white focus:bg-violet-500/40 focus:text-white" 
                    >
                        
                        {getSpellProperties(spell).map((property, index) => (
                            <td key={index} className="flex-col text-center text-[1vmax] shrink-0
                             flex-grow-0 [&:nth-child(2)]:w-[45%] [&:nth-child(2)]:pl-[2%] even:text-left [&:nth-child(5)]:text-left
                             [&:nth-child(3)]:pr-10" >
                                {property}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SpellTable;
