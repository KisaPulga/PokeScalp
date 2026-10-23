"use server";
const { serieService } = await import("../services/serie.service");

export async function getAllSeries(){
    return serieService.getAllSeries();
}

export async function createSerie(data: any){
    return serieService.createSerie(data);
}

export async function deleteSerie(id: number){
    return serieService.deleteSerie(id);
}

export async function updateSerie(id: number, data: any){
    return serieService.updateSerie(id, data);
}