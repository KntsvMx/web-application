export interface RegisterResponsePayload {
    username: string;
    email: string;
    password: string;
    id: number;
    created: Date;
    updated: Date;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    authorities: string[];
}
