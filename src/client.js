import sanityClient from "@sanity/client";



export default sanityClient({
  projectId: "u1ti1ru2", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'

});