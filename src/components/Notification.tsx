import {useEffect, useState } from 'react';

import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from '@heroicons/react/solid';
import useNotification from "../stores/useNotificationStore";
import { useConnection } from "@solana/wallet-adapter-react";
import { useNetworkConfiguration } from "contexts/NetworkConfigurationProvider";

// INTERNAL IMPORT
import NotificationSVG from "./SVG/NotificationSVG";


const NotificationList = () => {
  const { notifications, set: setNotificationStore } = useNotificationStore
    ((s) => s
  );

  const reversedNotifications = [...notifications].reverse();
  return 
    <div className={'pointer-events-none fixed inset-0 z-20 flex items-end px-4 py-6'
      sm:p-6}
      >
        <div className={'flex w-full flex-col'}>
          {reversedNotifications.map((n, idx)=> (
               <Notification 
                key={`${n.message}${idx }`} 
                type={n.type}
                message={n.message} 
                description={n.description}
                txid={n.txid}
            
                onHide={() =>{ 
                  setNotificationStore((state: any) => {
                    const reversedIndex = reversedNotifications.length - 1 - idx;
                    state.notifications = [
                      ...notifications.slice(0, reversedIndex),
                      ...notifications.slice(reversedIndex + 1),
                    ];
                  });
                }}
             />
            ) )}
        </div>
      </div>
  
}

export default Notification