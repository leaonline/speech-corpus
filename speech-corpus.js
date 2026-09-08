import { fromI18n } from "./extract/fromI18n";
import {textFormatter} from "./formatters/textFormatter";
import {jsonFormatter} from "./formatters/jsonFormatter";
import {nullWriter} from "./writers/nullWriter";
import {fileWriter} from "./writers/fileWriter";
import {output} from "./output";
import {transformToHashTuple} from "./transformers/hashTuple";

export const SpeechCorpus = {}

SpeechCorpus.extract = {}
SpeechCorpus.extract.fromI18n = fromI18n;

SpeechCorpus.FORMATTER_JSON = 'json'
SpeechCorpus.FORMATTER_TEXT = 'text'
SpeechCorpus.formatters = {
    [SpeechCorpus.FORMATTER_TEXT]: textFormatter,
    [SpeechCorpus.FORMATTER_JSON]: jsonFormatter
}

SpeechCorpus.WRITERS_FILE = 'file'
SpeechCorpus.WRITERS_NULL = 'null'
SpeechCorpus.writers = {
    [SpeechCorpus.WRITERS_FILE]: fileWriter,
    [SpeechCorpus.WRITERS_NULL]: nullWriter,
}

SpeechCorpus.TRANSFORMERS_HASH_TUPLE = 'hashTuple'
SpeechCorpus.transformers = {
    [SpeechCorpus.TRANSFORMERS_HASH_TUPLE]: transformToHashTuple
}

const cleaners = new Set()
SpeechCorpus.clean = {}
SpeechCorpus.clean.register = (fn) => cleaners.add(fn)
SpeechCorpus.clean.run = (data) => {
    const list = Array.from(data)
    const fns = Array.from(cleaners)
    return list.map((entry, index, self) => {
        let cleaned = entry
        for (const fn of fns) {
            cleaned = fn(cleaned, index, self)
        }
        return cleaned
    })
}


SpeechCorpus.build = output
