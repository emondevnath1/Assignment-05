document.getElementById('btn-2').addEventListener('click', function(){
   
    document.getElementById('history-btn').classList.remove('hidden');
    document.getElementById('donate-btn').classList.add('hidden');

    document.getElementById('btn-1').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-2').classList.add('bg-[#B4F461]')

    document.getElementById('btn-1').classList.add('border')
    document.getElementById('btn-2').classList.remove('border')

    document.getElementById('btn-1').classList.remove('font-semibold')
    document.getElementById('btn-2').classList.add('font-semibold')
    document.getElementById('btn-2').classList.remove('font-medium')
    document.getElementById('btn-1').classList.add('font-medium')
})
// console.log('hello')
document.getElementById('btn-1').addEventListener('click', function(){
   
    document.getElementById('history-btn').classList.add('hidden');
    document.getElementById('donate-btn').classList.remove('hidden');

    document.getElementById('btn-1').classList.add('bg-[#B4F461]')
    document.getElementById('btn-2').classList.remove('bg-[#B4F461]')

    document.getElementById('btn-1').classList.remove('border')
    document.getElementById('btn-2').classList.add('border')

    document.getElementById('btn-1').classList.remove('font-medium')
    document.getElementById('btn-1').classList.add('font-semibold')
    document.getElementById('btn-2').classList.remove('font-semibold')
    document.getElementById('btn-2').classList.add('font-medium')
})