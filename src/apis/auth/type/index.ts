/** 구글로그인 콜백 요청 응답 */
export interface GoogleLoginCallbackResponse {
  /** 로그인 또는 회원가입 타입 */ type: 'LOGIN' | 'SIGNUP';
  /** 로그인, 회원가입 유저 정보 */ user: User;
  /** 발급받은 토큰 정보 */ token: Token;
}

/** 로그인, 회원가입 유저 정보 */
interface User {
  /** 이메일 주소 */ email: string;
  /** PK (UUID)*/ id: string;
  /** 이름 */ name: string;
  /** 프로필 이미지 URL */ profileImageUrl: string | null;
  /** 역할 */ role: 'ADMIN' | 'USER';
  /** 소셜 타입 */ provider: 'GOOGLE';
  /** OAuth Provider Id */ oauthProviderId: number;
}

/** 발급받은 토큰 정보 */
interface Token {
  /** 새로 생성된 Access-Token */ accessToken: string;
  /** 새로 생성된 Refersh-Token */ refreshToken: string;
}
