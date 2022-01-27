
class MarvelService{
    _apiBase = 'https://keep.jrwebdeveloper.com/api/';
    _apiNotes = 'notes';
    getResponse = async (url) => {
        let res = await fetch(url);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}, state: ${res.state}`);
        }
        return await res.json();
    }
    getAllCharacters = () =>{
        return this.getResponse(`${this._apiBase}${this._apiNotes}`);
    }
    getCharacter = (id) =>{
        return this.getResponse(`${this._apiBase}${this._apiNotes}${id}`);
    }
}
export default MarvelService;