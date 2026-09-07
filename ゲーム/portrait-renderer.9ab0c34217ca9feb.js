/* Expression art is drawn only inside the face. Outfit/hair pixels stay intact. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.VNPortrait=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const xml=value=>String(value).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  function create(data){
    // Two current composites at most: repeated route playback does not retain
    // dozens of large data URLs. Everything comes from embedded local assets.
    const recent=new Map();
    function compose(outfit,asset,expression){
      const layout=data.outfits[outfit];
      if(!layout||layout.character!==asset.character)throw new Error('顔の位置指定がありません: '+outfit);
      if(!Object.hasOwn(data.labels,expression))throw new Error('表情が登録されていません: '+expression);
      if(expression==='smile')return asset.src;
      // Web delivery can serve the identical composite as a separate image.
      // SVG images cannot load external outfit/face images themselves.
      if(data.precomposed?.[outfit]?.[expression])return data.precomposed[outfit][expression];
      const source=data.assets[asset.character+'-'+expression];
      if(!source||source.character!==asset.character)throw new Error('表情画像がありません: '+expression);
      const key=outfit+':'+expression;
      const cached=recent.get(asset.character);
      if(cached?.key===key&&cached.base===asset.src&&cached.face===source.src)return cached.url;
      const placement=layout.transform||[1,0,0,1,0,0];
      const region=data.regions[asset.character];
      // The feathered mask is entirely within the face: it never reaches the
      // silhouette, hair style, neck, clothing, accessories, or hand pose.
      const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1536" viewBox="0 0 1024 1536">'+
        '<defs><filter id="soft" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="1.4"/></filter>'+
        '<mask id="face" maskUnits="userSpaceOnUse" x="0" y="0" width="1024" height="1536"><path fill="white" filter="url(#soft)" d="'+xml(region)+'"/></mask></defs>'+
        '<image width="1024" height="1536" href="'+xml(asset.src)+'"/>'+
        '<g transform="matrix('+placement.join(' ')+')"><g mask="url(#face)"><image width="1024" height="1536" href="'+xml(source.src)+'"/></g></g></svg>';
      const url='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
      recent.set(asset.character,{key,base:asset.src,face:source.src,url});
      return url;
    }
    return {compose};
  }
  return {create};
});
