import type { Ementa } from './tipos';
import { disciplinaPortugues } from './portugues';
import { disciplinaMatematica } from './matematica';
import { disciplinaIngles } from './ingles';
import { disciplinaHistoria } from './historia';
import { disciplinaGeografia } from './geografia';
import { disciplinaQuimica } from './quimica';
import { disciplinaBiologia } from './biologia';
import { disciplinaFisica } from './fisica';

/**
 * Ementa completa do vestibular UNIVESP.
 * Fonte: .metadocs/o_que_estudar.md
 */
export const EMENTA_VESTIBULAR: Ementa = {
  disciplinas: [
    disciplinaPortugues,
    disciplinaMatematica,
    disciplinaIngles,
    disciplinaHistoria,
    disciplinaGeografia,
    disciplinaQuimica,
    disciplinaBiologia,
    disciplinaFisica,
  ],
};
