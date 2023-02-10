export interface Conference {
    title: string,
    description: string,
    location: string,
    venue: string,
    startDate: string,
    endDate: string,
    talkCount: number,
    speakerCount: number,
    days: Day[]
}

export interface Day {
    _id: string,
    title: string,
    description: string,
    date: string,
    talks: Talk[]
    speakers: Speaker[]
}

export interface Talk {
    _id: string,
    title: string,
    time: string,
    speaker: string
}

export interface Speaker {
    name: string,
    title: string,
    imageUrl: string
}