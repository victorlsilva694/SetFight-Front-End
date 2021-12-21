import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import api from '../services/api';

class AuthStore {

  constructor() {
    makeAutoObservable(this);
  }

  public isAuthenticated = false;
  public user = {
    email: '',
    name: '',
    lastName: '',
    wins: 0,
    loses: 0
  };

  public async login(email: string, password: string) {
    try {
      const results = await api.post("http://localhost:3333/login/auth", {
        user: {
          email, password
        }
      });
      const token = results.data.token;
      localStorage.setItem('token', token);

      console.log(results)
      runInAction(() => {
        this.isAuthenticated = true;
        this.user.email = results.data.email;
        this.user.name = results.data.name;
        this.user.lastName = results.data.lastName;
        this.user.wins = results.data.wins;
        this.user.loses = results.data.loses;
      })
    } catch (err) {
      console.dir(err);
    }
  }

  public async verifyToken(){
    const { data } = await api.get('/verifyToken');

    runInAction(() => {
      this.isAuthenticated = true;
      this.user.email = data.email;
      this.user.name = data.name;
      this.user.lastName = data.lastName;
      this.user.wins = data.wins;
      this.user.loses = data.loses;
    })

  }
}
export const authStore = new AuthStore();
export const authContext = createContext(authStore);
export const AuthProvider = authContext.Provider;