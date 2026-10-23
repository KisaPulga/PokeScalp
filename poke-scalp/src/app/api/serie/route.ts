import { serieService } from "@/src/server/services/serie.service";

export async function GET() {
  const series = await serieService.getAllSeries();
  return Response.json(series);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newSerie = await serieService.createSerie(body);
  return Response.json(newSerie);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const updatedSerie = await serieService.updateSerie(body.id, body);
  return Response.json(updatedSerie);
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const deletedSerie = await serieService.deleteSerie(body.id);
  return Response.json(deletedSerie);
}