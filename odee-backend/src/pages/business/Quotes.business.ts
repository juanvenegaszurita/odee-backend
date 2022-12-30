import { File, ItemsQuotes, Quotes } from "../model/index.model";
import {
  DeleteFileProvider,
  InsertFileProvider,
  UpdateFileProvider,
} from "../provider/File.provider";
import {
  DeleteItemsQuotesProvider,
  InsertItemsQuotesProvider,
  UpdateItemsQuotesProvider,
} from "../provider/ItemsQuotes.provider";
import {
  DeleteQuotesProvider,
  GetQuotesAllBusinessProvider,
  GetQuotesAllClientsProvider,
  GetQuotesAllProvider,
  GetQuotesOneProvider,
  GetQuotesOneSProvider,
  InsertQuotesProvider,
  UpdateQuotesProvider,
} from "../provider/Quotes.provider";

export async function GetQuotesBusiness(id: number, type: number) {
  const quotesList: any = [];
  const LIST_TIPE_GET = [
    "FOR_BUSINESS",
    "FOR_CLIENTS",
    "FOR_USERS",
    "FOR_UNIQUE",
  ];

  if (type === 1) {
    const selectForBusiness = await GetQuotesAllBusinessProvider(id);
    quotesList.push(selectForBusiness);
  } else if (type === 2) {
    const selectForClient = await GetQuotesAllClientsProvider(id);
    quotesList.push(selectForClient);
  } else if (type === 4) {
    const selectForUnique = await GetQuotesOneProvider(id);
    quotesList.push(selectForUnique);
  } else if (type === null || type === undefined || type === 0) {
    const selectAll = await GetQuotesAllProvider();
    quotesList.push(selectAll);
  }

  return quotesList;
}

export async function GenerateQuotesBusiness(
  file: File,
  quotes: Quotes,
  itemsQuotes: ItemsQuotes
) {
  const { url, mimeType, typeFile_id } = file;
  const { cant, total, prodServ_id } = itemsQuotes;
  const { title, detail, dateQuote, clients_id } = quotes;

  const fileC = await InsertFileProvider(url, mimeType, typeFile_id);
  const quotesC = await InsertQuotesProvider(
    title,
    detail,
    dateQuote,
    clients_id,
    fileC.id
  );
  const itemsQuotesC = await InsertItemsQuotesProvider(
    cant,
    total,
    quotesC.id,
    prodServ_id
  );

  return [
    {
      File: fileC,
      Quotes: quotesC,
      "Items Quotes": itemsQuotesC,
    },
  ];
}

export async function UpdateQuotesBusiness(
  id: number,
  file: File,
  quotes: Quotes,
  itemsQuotes: ItemsQuotes
) {
  const { url, mimeType, typeFile_id } = file;
  const { cant, total, prodServ_id } = itemsQuotes;
  const { title, detail, dateQuote, clients_id, file_id } = quotes;

  const quotesC = await UpdateQuotesProvider(
    id,
    title,
    detail,
    dateQuote,
    clients_id,
    file_id
  );
  const fileC = await UpdateFileProvider(file_id, url, mimeType, typeFile_id);
  const itemsQuotesC = await UpdateItemsQuotesProvider(
    cant,
    total,
    quotesC.id,
    prodServ_id
  );

  return [
    {
      File: fileC,
      Quotes: quotesC,
      "Items Quotes": itemsQuotesC,
    },
  ];
}

export async function DeleteQuotesBusiness(id: number) {
  const deleteQ = await DeleteQuotesProvider(id);
  const fileId : any = deleteQ.file_id
  const deleteF = await DeleteFileProvider(parseInt(fileId));
  const deleteIQ = await DeleteItemsQuotesProvider(deleteQ.id);

  return [{
    "Detele Quotes": deleteQ,
    "Delete File": deleteF,
    "Delete Items Quotes": deleteIQ
  }];
}

/* 
{
    "file": {
        "url": "www.google.cl",
        "mimeType": "mimeType",
        "typeFile_id": 2
    },
    "itemsQuotes": {
        "cant": 5,
        "total": 5000,
        "prodServ_id": 1
    },
    "quotes": {
        "title": "Cotizacion",
        "detail": "Cotizacion de un producto",
        "dateQuote": "2022-12-30",
        "clients_id": 1
    }
}
*/

/* 
{
    "file": {
        "url": "www.google.cl",
        "mimeType": "mimeType",
        "typeFile_id": 2
    },
    "itemsQuotes": {
        "cant": 5,
        "total": 5000,
        "quotes_id": 2,
        "prodServ_id": 1
    },
    "quotes": {
        "title": "Cotizacion",
        "detail": "Cotizacion de un producto",
        "dateQuote": "2022-12-30",
        "clients_id": 1,
        "file_id": 6
    }
}
*/