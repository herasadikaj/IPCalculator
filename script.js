function calculate() {
    const ipAddress = document.getElementById('ipAddress').value;
    const subnetMask = document.getElementById('subnetMask').value;
  
    const { networkId, broadcastId } = calculateNetworkAndBroadcast(ipAddress, subnetMask);
  
    document.getElementById('networkIdResult').innerText = networkId;
    document.getElementById('broadcastIdResult').innerText = broadcastId;
  }
  
  function calculateNetworkAndBroadcast(ipAddress, subnetMask) {
    const ipArray = ipAddress.split('.').map(Number);
    const maskArray = subnetMask.split('.').map(Number);
  
   
    const networkIdArray = ipArray.map((octet, index) => octet & maskArray[index]);
    const networkId = networkIdArray.join('.');
  

    const invertedMaskArray = maskArray.map(octet => 255 - octet);
    const broadcastIdArray = ipArray.map((octet, index) => octet | invertedMaskArray[index]);
    const broadcastId = broadcastIdArray.join('.');
  
    return { networkId, broadcastId };
  }
  