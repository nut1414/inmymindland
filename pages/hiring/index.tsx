import Head from "next/head";
import Template from "../../components/common/Template";
import Listing from "../../components/hiring/Listing";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SearchHiringBox from "../../components/hiring/SearchHiringBox";
import { IJobListing } from "../../models/JobListing";
import { IUserInfo } from "../../models/UserInfo";
import { IWorkerProfile } from '../../models/UserInfo'

export interface HydratedJobListing extends Omit<IJobListing, 'userinfo'> {
  userinfo: {
    user: string,
    worker_profile: IWorkerProfile
  }
}

const Hiring = () => {
  const [ listing, setListing ] = useState([] as HydratedJobListing[])
  const { data: session } = useSession()
  const [searchText, setSearchText] = useState("");
  const [workCat, setWorkCat] = useState("")
  const [schoolCat, setSchoolCat] = useState("")
  const [sortBy, setSortBy] = useState("")

  const doSearch = async () => {
    const searchparam = new URLSearchParams([['s',searchText], ['tags',schoolCat],['tags',workCat]])
    const listsget = await fetch('/api/joblists?' + searchparam,{method:'GET'}).then((res) => res.json()).then((data) => 
    setListing(data?.result || [])
    )
  }

  useEffect(() => {
    doSearch()
  },[])
  return (
    <div>
      <Head>
        <title>Hiring | Inmymind</title>
      </Head>
      <Template className="mx-40" bgColor="bg-[#F5F5F5]">
        <SearchHiringBox search={doSearch} searchTextState={setSearchText} workState={setWorkCat} schoolState={setSchoolCat} sortByState={setSortBy}/>
        <div className="gap-x-4 flex flex-row flex-wrap mt-16 z-0 justify-start">
          {listing?.map((joblist) => <Listing key={joblist.uid} listingInfo={joblist}/>)}
        </div>
      </Template>

    </div>
  )
}

export default Hiring;