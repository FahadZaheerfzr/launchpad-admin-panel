import React from "react";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import LaunchpadSVG from "../../svgs/Sidebar/launchpad";
import { useDocumentTitle } from "../../hooks/setDocumentTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config/constants/LaunchpadAddress";
import { useModal } from "react-simple-modal-provider";
import AdminTable from "../../components/Administration/AdminTable";



export default function Administration() {
  useDocumentTitle("Pools");
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState([]);
  const { open: openLoadingModal, close: closeLoadingModal } =
    useModal("LoadingModal");
  //we will get data for pools from api
  useEffect(() => {
    //api request to localhost:8080/api/sale
    
    async function getPools() {
      openLoadingModal();
      setLoading(true);
      try {
        const res = await axios.get(`${BACKEND_URL}/api/sale/admin`);
        console.log(res.data)
        
        setPools(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
      closeLoadingModal();
    }

    getPools();
  }, []);

  return (
    <BaseLayout
      title={"Arborswap"}
      title_img={<LaunchpadSVG className="md:hidden fill-dim-text" />}
      page_name={"Admin"}
      page_description={"Edit sales and manage the launchpad"}
    >
      <AdminTable pools={pools} />
    </BaseLayout>
  );
}
