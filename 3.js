  const cetak_gambar = (n) => {
      if(n%2 === 0){
          console.log("Silahkan input bilangan ganjil!");
      } else {
          for(let row=0; row < n; row++){
              let lines = "";

              for(let col=0; col<n;col++){
                  if(col === 0 || col === n-1){
                      lines += '*';
                  }else if(row % 2 == 0){
                      lines += '*';
                  }else {
                      lines += '=';
                  }
              }
              console.log(lines)
          }
      }
  };

  cetak_gambar(5);
