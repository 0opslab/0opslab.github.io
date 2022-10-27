import{_ as e,o as n,c as s,e as i}from"./app.a667bd71.js";const a={},l=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Create a key</span>
 gpg --gen-key


<span class="token comment"># Show keys</span>
  To list a summary of all keys
    gpg --list-keys
  To show your public key
    gpg <span class="token parameter variable">--armor</span> <span class="token parameter variable">--export</span>
  To show the fingerprint <span class="token keyword">for</span> a key
    gpg <span class="token parameter variable">--fingerprint</span> KEY_ID

<span class="token comment"># Search for keys</span>
  gpg --search-keys <span class="token string">&#39;user@emailaddress.com&#39;</span>

<span class="token comment"># To Encrypt a File</span>
  gpg <span class="token parameter variable">--encrypt</span> <span class="token parameter variable">--recipient</span> <span class="token string">&#39;user@emailaddress.com&#39;</span> example.txt


<span class="token comment"># To Decrypt a File</span>
  gpg <span class="token parameter variable">--output</span> example.txt <span class="token parameter variable">--decrypt</span> example.txt.gpg


<span class="token comment"># Export keys</span>
  gpg <span class="token parameter variable">--output</span> ~/public_key.txt <span class="token parameter variable">--armor</span> <span class="token parameter variable">--export</span> KEY_ID
  gpg <span class="token parameter variable">--output</span> ~/private_key.txt <span class="token parameter variable">--armor</span> --export-secret-key KEY_ID

  Where KEY_ID is the <span class="token number">8</span> character GPG key ID.

  Store these files to a safe location, such as a USB drive, <span class="token keyword">then</span>
  remove the private key file.

    shred <span class="token parameter variable">-zu</span> ~/private_key.txt

<span class="token comment"># Import keys</span>

  Retrieve the key files <span class="token function">which</span> you previously exported.
    gpg <span class="token parameter variable">--import</span> ~/public_key.txt
    gpg --allow-secret-key-import <span class="token parameter variable">--import</span> ~/private_key.txt

  Then delete the private key file.

    shred <span class="token parameter variable">-zu</span> ~/private_key.txt

<span class="token comment"># Revoke a key</span>

  Create a revocation certificate.

    gpg <span class="token parameter variable">--output</span> ~/revoke.asc --gen-revoke KEY_ID

  Where KEY_ID is the <span class="token number">8</span> character GPG key ID.

  After creating the certificate <span class="token function">import</span> it.

    gpg <span class="token parameter variable">--import</span> ~/revoke.asc

  Then ensure that key servers know about the revokation.

    gpg --send-keys KEY_ID

<span class="token comment"># Signing and Verifying files</span>

  If you<span class="token string">&#39;re uploading files to launchpad you may also want to include
  a GPG signature file.

    gpg -ba filename

  or if you need to specify a particular key:

    gpg --default-key &lt;key ID&gt; -ba filename

  This then produces a file with a .asc extension which can be uploaded.
  If you need to set the default key more permanently then edit the
  file ~/.gnupg/gpg.conf and set the default-key parameter.

  To verify a downloaded file using its signature file.

  gpg --verify filename.asc

# Signing Public Keys

  Import the public key or retrieve it from a server.

    gpg --keyserver &lt;keyserver&gt; --recv-keys &lt;Key_ID&gt;

  Check its fingerprint against any previously stated value.

    gpg --fingerprint &lt;Key_ID&gt;

  Sign the key.

    gpg --sign-key &lt;Key_ID&gt;

  Upload the signed key to a server.

    gpg --keyserver &lt;keyserver&gt; --send-key &lt;Key_ID&gt;

# Change the email address associated with a GPG key

  gpg --edit-key &lt;key ID&gt;
  adduid

  Enter the new name and email address. You can then list the addresses with:

    list

  If you want to delete a previous email address first select it:

    uid &lt;list number&gt;

  Then delete it with:

    deluid

  To finish type:

    save

  Publish the key to a server:

    gpg --send-keys &lt;key ID&gt;

# Creating Subkeys

  Subkeys can be useful if you don&#39;</span>t wish to have your main GPG key
  installed on multiple machines. In this way you can keep your
  master key safe and have subkeys with expiry periods or <span class="token function">which</span> may be
  separately revoked installed on various machines. This avoids
  generating entirely separate keys and so breaking any web of trust
  <span class="token function">which</span> has been established.

    gpg --edit-key <span class="token operator">&lt;</span>key ID<span class="token operator">&gt;</span>

  At the prompt type:

    addkey

  Choose RSA <span class="token punctuation">(</span>sign only<span class="token punctuation">)</span>, <span class="token number">4096</span> bits and <span class="token keyword">select</span> an expiry period.
  Entropy will be gathered.

  At the prompt type:

    save

  You can also repeat the procedure, but selecting RSA <span class="token punctuation">(</span>encrypt only<span class="token punctuation">)</span>.
  To remove the master key, leaving only the subkey/s <span class="token keyword">in</span> place:

    gpg --export-secret-subkeys <span class="token operator">&lt;</span>subkey ID<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> subkeys
    gpg <span class="token parameter variable">--export</span> <span class="token operator">&lt;</span>key ID<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> pubkeys
    gpg --delete-secret-key <span class="token operator">&lt;</span>key ID<span class="token operator">&gt;</span>

  Import the keys back.

    gpg <span class="token parameter variable">--import</span> pubkeys subkeys

  Verify the import.

    gpg <span class="token parameter variable">-K</span>

  Should show sec<span class="token comment"># instead of just sec.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[l];function d(v,t){return n(),s("div",null,r)}const p=e(a,[["render",d],["__file","gpg.html.vue"]]);export{p as default};
