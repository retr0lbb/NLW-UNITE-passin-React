import { useState, useEffect } from "react"
import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"


dayjs.extend(relativeTime)
dayjs.locale("pt-br")

interface AttendeeProps{
    checkedInAt: string | null,
    createdAt: string,
    email: string,
    id: number,
    name: string
}


export function AttendeeList(){
    const [search, setSearch] = useState(()=> {
        const url = new URL(window.location.toString())

        if(url.searchParams.has("search")){
            return url.searchParams.get("search") ?? ""
        }

        return ""
    })
    const [page, setPage] = useState(()=> {
        const url = new URL(window.location.toString())

        if(url.searchParams.has("page")){
            return Number(url.searchParams.get("page"))
        }

        return 1
    })

    
    const [total, setTotal] = useState(0)
    const totalPages = Math.ceil(total / 10)
    const [attendees, setAttendees] = useState<AttendeeProps[]>([])

    function setCurrentSearch(search: string){
        const url = new URL(window.location.toString())

        url.searchParams.set("search", search)
 
        window.history.pushState({}, "", url)

        setSearch(search)
    }

    function setCurrentPage(page: number){
        const url = new URL(window.location.toString())

        url.searchParams.set("page", String(page))
 
        window.history.pushState({}, "", url)

        setPage(page)
    }


    useEffect(() => {
        const url = new URL("http://localhost:3333/events/ea15b680-4105-4ec4-a420-dc0624421622/attendees")

        url.searchParams.set("pageIndex", String(page - 1))

        if(search.length > 0){
            url.searchParams.set("query", search)
        }

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setAttendees(data.attendees)
            setTotal(data.attendeesAmount)
        })
    }, [page, search])

    function goToNextPage(){
       // setPage(prev => prev + 1)
       setCurrentPage(page+ 1)
    }
    function goToPreviusPage(){
        setCurrentPage(page - 1)
    }
    function goToLastPage(){
        setCurrentPage(totalPages)
    }
    function goToFirstPage(){
        setCurrentPage(1)
    }

    return(
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 ">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="flex items-center px-3 w-72 py-1.5 border border-white/10 rounded-lg gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input 
                        onChange={(e) => {setCurrentSearch(e.target.value); setCurrentPage(1)}} 
                        value={search} className="bg-transparent flex-1 outline-none focus:ring-0 h-auto border-0 p-0 text-sm" 
                        placeholder="Buscar participante..." 
                    />
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
                    {attendees.map((attendee) => {
                        return(
                            <TableRow key={attendee.id}>
                                <TableCell>
                                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-white">{attendee.name}</span>
                                    <span>{attendee.email}</span>
                                </div>
                                </TableCell>
                                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{attendee.checkedInAt === null 
                                    ? <span className="text-zinc-400">Não fez check-in</span>
                                    : dayjs().to(attendee.checkedInAt) }</TableCell>
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
                            Mostrando {attendees.length} de {total} items
                        </TableCell>
                        <TableCell className="text-right" colSpan={3}>
                            <div className="inline-flex gap-8 items-center ">
                                <span>Página {page} de {totalPages}</span>
                                <div className=" flex gap-1.5">
                                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToPreviusPage} disabled={page <= 1}>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
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