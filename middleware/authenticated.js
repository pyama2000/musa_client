export default function({ redirect, route, store }) {
  if (
    !store.getters['login/isSignedin'] &&
    route.name !== 'login' &&
    route.name !== 'callback'
  ) {
    return redirect('/login')
  }
}
