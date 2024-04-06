import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"

export function AttendeeList(){
    return(
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 ">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="flex items-center px-3 w-72 py-1.5 border border-white/10 rounded-lg gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input type="text" className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" placeholder="Buscar participante..." />
                </div>
            </div>

            
            <Table>
                <thead>
                    <tr className="border-b border-white/10">
                        <TableHeader style={{ width: 48 }}>
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({length: 8}).map((_, i) => {
                        return(
                            <TableRow>
                                <TableCell>
                                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                                </TableCell>
                                <TableCell>123</TableCell>
                                <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-white">Henrique Barbosa Sampaio</span>
                                    <span>retr0lbb@gmail.com</span>
                                </div>
                                </TableCell>
                                <TableCell>7 dia atrás</TableCell>
                                <TableCell>4 dias atrás</TableCell>
                                <TableCell>
                                    <IconButton transparent>
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            Mostrando 10 de 228 items
                        </TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex gap-8 items-center ">
                                <span>Página 1 de 23</span>
                                <div className=" flex gap-1.5">
                                    <IconButton>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}