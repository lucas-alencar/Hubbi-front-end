<script>
  let selectedFile;

  function handleFileChange(event) {
    selectedFile = event.target.files[0];
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Faça o que for necessário com o arquivo selecionado (por exemplo, envie para o backend)
    console.log("Arquivo selecionado:", selectedFile);
  }
</script>

<div class="flex items-center justify-center w-screen h-screen bg-gray-100">
  <div class="card card-personalizado bg-white border shadow-xl">
      <div class="card-body flex flex-col p-12 items-center text-center">
          <div class="text-gray-400">
            <main>
              <form on:submit={handleSubmit}>
                <div class="flex flex-col items-center justify-center">
                  <input class="text-gray-500" type="file" on:change={handleFileChange} />
                  <button type="submit" class="btn mt-5 btn-neutral">Enviar arquivo</button>
                </div>
              </form>
            </main>
          </div>
      </div>
  </div>
</div>

<style>
  .card-personalizado{
      width: 35%;
      height: auto;
  }
  .ou-personalizado{
      width: 60%;
      margin-left: 20%;
  }
</style>


