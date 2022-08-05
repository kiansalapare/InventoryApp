import { AppState } from "./AppState";

export const AppInitialState: AppState = {
    loading: {
        show: false
    },
    login: {
        error: null,  
        isLoggedin: false,
        isLogging: false,   
        isRecoveredPassword: false,
        isRecoveringPassword: false 
        
    }
}