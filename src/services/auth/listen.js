import {Subject} from 'rxjs'

const subject = new Subject()

export const ListenService = {
    switchLang: (lang) => subject.next({lang: lang}), // input (truyen tin hieu)
    onChangeLang: () => subject.asObservable() // nhan va phat
        
}