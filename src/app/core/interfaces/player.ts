export interface Player {
    id: number,
    // Optional beacouse maybe we dont find a great photo of the player
    photo?: string,
    nameInGame: string,
    name: string,
    mainRol: string,
    description: string,
    age: number,
    // Place of birth
    placeBirth: string,
    firstChampion: string,
    secondChampion: string,
    thirdChampion: string
}