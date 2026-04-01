const PREFIXO_PROGRESSO = 'vestibular_progresso_';
const PREFIXO_SESSAO = 'vestibular_sessao_';
const CHAVE_USUARIO = 'vestibular_usuario_id';
const CHAVE_TELEMETRIA = 'vestibular_telemetria';

/** Gera ou recupera o ID anônimo do usuário. */
export function obterOuCriarUsuarioId(): string {
  const existente = localStorage.getItem(CHAVE_USUARIO);
  if (existente) return existente;

  const novoId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  localStorage.setItem(CHAVE_USUARIO, novoId);
  return novoId;
}

/** Salva dados no localStorage com serialização JSON. */
export function salvar<T>(chave: string, dados: T): void {
  localStorage.setItem(chave, JSON.stringify(dados));
}

/** Recupera dados do localStorage com deserialização JSON. */
export function carregar<T>(chave: string): T | null {
  const bruto = localStorage.getItem(chave);
  if (!bruto) return null;

  try {
    return JSON.parse(bruto) as T;
  } catch {
    return null;
  }
}

/** Remove dados do localStorage. */
export function remover(chave: string): void {
  localStorage.removeItem(chave);
}

/** Chave de progresso para uma trilha específica. */
export function chaveProgresso(trilhaId: string, usuarioId: string): string {
  return `${PREFIXO_PROGRESSO}${trilhaId}_${usuarioId}`;
}

/** Chave de sessão ativa. */
export function chaveSessao(sessaoId: string): string {
  return `${PREFIXO_SESSAO}${sessaoId}`;
}

/** Chave do log de telemetria. */
export function chaveTelemetria(): string {
  return CHAVE_TELEMETRIA;
}
