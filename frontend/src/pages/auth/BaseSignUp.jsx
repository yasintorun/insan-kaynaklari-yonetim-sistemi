import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dimmer, Loader } from 'semantic-ui-react'

export default function BaseSignUp({ Panel }) {
    return (
        <div>
            <div className="register-panel full-panel">
                
                <div className="register-card p-5">
                    <div>
                        <h2 className="text-secondary">Kayıt Ol</h2>
                    </div>
                    <Panel />
                    <div className="mt-4">
                        <span>Zaten üye misin?</span> <Link as={NavLink} to="/users/login" className="btn btn-link">Giriş Yap</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
