export default ({ route }) => {
  if (route.query.ads && !sessionStorage.getItem('ads')) {
    sessionStorage.setItem('ads', route.query.ads)
  }
}